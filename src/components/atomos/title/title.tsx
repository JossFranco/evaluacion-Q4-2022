import { FC } from "react";
import "./title.scss";

export interface TitleProps {
  principalText: string;
}

export const Title: FC<TitleProps> = (props: TitleProps) => {
  return (
    <section className="Title">
      <div className="title__h1">
        <h1 className="Title__text">{props.principalText}</h1>
      </div>
    </section>
  );
};
