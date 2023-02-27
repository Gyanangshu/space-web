import React from 'react'

const Countup = ({start = 0, end, timer = 50 }) => {

    const [count, setCount] = React.useState(null)
    const ref = React.useRef(start)

    const accumulator = end / 200;

    const updateCounterState = () => {
        if(ref.current < end) {
            const result = Math.ceil(ref.current + accumulator)
            if (result > end) return setCount(end)
            setCount(result)
            ref.current = result
        }
        setTimeout(updateCounterState, timer)
    };

    React.useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            updateCounterState();
        }
        return () => (isMounted = false);
    }, [end, start]);

    return <div>{count}</div>
}

export default Countup
