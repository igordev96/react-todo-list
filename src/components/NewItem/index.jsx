import { Btn, Container } from "./styles";

export function NewItem(props) {
  const addItem = () => {
     props.setActive(!props.active);
     
    if (props.active && props.item!=="") {
      props.setTodos([...props.todos, {
        text: props.item,
        id: Math.random()*500,
        checked: false
      }])
      props.setItem("")
    }
  }

  return (
    <Container isActive={props.active}>
      <Btn 
        onClick={addItem}
      >
        {props.active ? "Add" : "New Item"}
      </Btn>
      <input 
        type="text"
        value={props.item}
        onChange={event => props.setItem(event.target.value)}
      />
    </Container>
  );
}