export interface User {
  id: number;
  name: string;
  email: string;  
  status: "active" | "blocked";
  hrs: number;
  msg: number;
  news: number;
  games: number;
  movies: number;
  custom?: boolean
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@gmail.com", status: "active", hrs: 2, msg: 23, news: 8, games: 5, movies: 10 },
  { id: 2, name: "Boris", email: "boris@gmail.com", status: "blocked", hrs: 23, msg: 36, news: 18, games: 6, movies: 12 },
  { id: 3, name: "Vadim", email: "vadim@gmail.com", status: "active", hrs: 35, msg: 56, news: 20, games: 15, movies: 21 },
  { id: 4, name: "Anton", email: "anton@gmail.com", status: "active", hrs: 10, msg: 49, news: 12, games: 8, movies: 29 },
  { id: 5, name: "Sergei", email: "sergei@gmail.com", status: "blocked", hrs: 7, msg: 2, news: 5, games: 2, movies: 0 },
  { id: 6, name: "Alexander", email: "alexandr@gmail.com", status: "active", hrs: 5, msg: 0, news: 0, games: 0, movies: 0 },
];

export default users;
