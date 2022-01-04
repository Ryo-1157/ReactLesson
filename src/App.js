import Article from "./components/Article";
import { TextInput } from "./components/TextInput";
import { ToggleButton } from "./components/ToggleButton";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div>
      <Article title="Hey Guys" logo="/logo192.png"></Article>
      <TextInput></TextInput>
      <ToggleButton></ToggleButton>
      <Counter></Counter>
    </div>
  );
};
