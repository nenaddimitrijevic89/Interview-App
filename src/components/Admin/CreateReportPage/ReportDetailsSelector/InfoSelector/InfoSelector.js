import React from 'react';
import { Select, Col } from 'react-materialize';

const InfoSelector = ({ infos, label, setOption }) => {
    let someOption;

    const handleOptionChange = (event) => {
        someOption = event.currentTarget.value;
    }

    const onChangeOption = (event) => {
        handleOptionChange(event)
    }

    return (
        <Col l={4}>
            < Select
                id="Select-9"
                label={label}
                multiple={false}
                onChange={onChangeOption}
                options={{
                    classes: '',
                    dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: (() => { setOption(someOption) }),
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }
                }
                }
            // value={infos[0]}
            >
                {infos.map((info, i) => <option key={i} value={info}>{info}</option>)}
            </Select >
        </Col>
    )
}

export { InfoSelector };