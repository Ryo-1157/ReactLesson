import { useState } from "react";
import { Content, PublishButton, Title } from "./index";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    setIsPublished(!isPublished);
  };
  return (
    <div>
      <Title title={props.title} logo={props.logo}></Title>
      <Content content={props.content}></Content>
      <PublishButton
        isPublished={isPublished}
        onClick={() => publishArticle()}
      ></PublishButton>
    </div>
  );
};

export default Article;
