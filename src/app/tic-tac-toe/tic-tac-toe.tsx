import { useState } from 'react';

/* eslint-disable-next-line */
export interface HelloWorldProps {}

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

interface SquareProps {
  value: string | null
  onSquareClick: () => void
}

function Square ({ value, onSquareClick }: SquareProps): JSX.Element {

  return (
    <button className="border-solid border-2 border-gray-400 float-left mr-1 mt-1 p-0 text-center font-family cursive font-bold leading-5 h-16 w-16 text-3xl" onClick={onSquareClick}>
      {value}
    </button>
  )
}

interface BoardProps {
  xIsNext: boolean
  squares: Array<string | null>
  onPlay: (nextSquares: Array<string | null>) => void
}

function Board ({ xIsNext, squares, onPlay }: BoardProps): JSX.Element {
  function handleClick (i: number): void {
    if ((calculateWinner(squares) != null) || (squares[i] != null)) {
      return
    }
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status

  if (winner != null) {
    status = 'Winner: ' + winner
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw! Try again"
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  const boardSize = 3
  const boardRows = []
  for (let i = 0; i < boardSize; i++) {
    const row = []
    for (let j = 0; j < boardSize; j++) {
      const squareIndex = i * boardSize + j

      row.push(
        <Square
          key={squareIndex}
          value={squares[squareIndex]}
          onSquareClick={() => { handleClick(squareIndex) }}
        />
      )
    }

    boardRows.push(
      <div key={i} className="flex">
        {row}
      </div>
    )
  }

  return (
    <>
      <div>{status}</div>
      {boardRows}
    </>
  )
}

function calculateWinner (squares: Array<string | null>): string | null {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i]
    if (
      (squares[a] != null) &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a]
    }
  }
  return null
}

export function TicTacToe(props: HelloWorldProps) {
  const [history, setHistory] = useState<Array<Array<string | null>>>([
    Array(9).fill(null)
  ])
  const [currentMove, setCurrentMove] = useState<number>(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const [isAscending, setIsAscending] = useState<boolean>(true)

  function handleToggleSort (): void {
    setIsAscending(!isAscending)
  }

  function handlePlay (nextSquares: Array<string | null>): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo (nextMove: number): void {
    setCurrentMove(nextMove)
  }

  const sortedHistory = isAscending ? history : [...history].reverse()

  const moves = sortedHistory.map((squares, move) => {
    const reversedMove = isAscending
      ? move
      : history.length - 1 - move
    const description =
      reversedMove > 0
        ? 'Go to move #' + reversedMove
        : 'Go to game start'
    return (
      <li key={reversedMove}>
        <button onClick={() => { jumpTo(reversedMove) }}>{description}</button>
      </li>
    )
  })

  return (
    <div className="flex flex-wrap gap-5 m-10">
      <div className="">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="sm:mt-5 lg:ml-5">
        <button onClick={handleToggleSort}>
          Toggle Sort Order: {isAscending ? 'Ascending' : 'Descending'}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default TicTacToe;
