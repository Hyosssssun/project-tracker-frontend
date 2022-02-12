import { Radio } from "antd";

export default function Select() {

    function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
    }

    return (
        <>
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <br />
            <Radio.Group
                onChange={onChange}
                defaultValue="a"
                style={{ marginTop: 16 }}
            >
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b" disabled>
                    Shanghai
                </Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <br />
            <Radio.Group
                disabled
                onChange={onChange}
                defaultValue="a"
                style={{ marginTop: 16 }}
            >
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
        </>
    );

};