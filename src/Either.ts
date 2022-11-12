export type Either<R, L> = R | L

export type EitherError<R, L extends Error = Error> = R | L
