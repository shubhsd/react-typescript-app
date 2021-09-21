type GreetProps = {
    name: string
};

const Greet = (props: GreetProps) => {
    // Here we defined type of our props and bind it with the props that we were receiving.
    return (
        <div>
            <h2>Welcome {props.name}! You have 10 new messages</h2>
        </div>
    )
}

export default Greet
