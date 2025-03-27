function Calc() {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const [result, setResult] = React.useState(0);

    const clickHandler = (e) => {
        e.preventDefault();
        setResult(x + y);
    };

    return (
        <section id='calc-app'>
            <h1>덧셈 계산기</h1>
            <form>
                <fieldset>
                    <legend>계산기 입력폼</legend>
                    <div>
                        <label>x:</label>
                        <input
                            class='x-input'
                            dir='rtl'
                            value={x}
                            onChange={(e) => setX(parseInt(e.target.value))}
                        />
                        <label>y:</label>
                        <input
                            class='y-input'
                            dir='rtl'
                            value={y}
                            onChange={(e) => setY(parseInt(e.target.value))}
                        />
                        <span>=</span>
                        <span class='result-span'>{result}</span>
                    </div>
                    <hr />
                    <div>
                        <input type='submit' value='초기화' />
                        <input
                            onClick={clickHandler}
                            class='submit-input'
                            type='submit'
                            value='계산하기'
                        />
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

ReactDOM.render(<Calc />, document.getElementById('root'));
