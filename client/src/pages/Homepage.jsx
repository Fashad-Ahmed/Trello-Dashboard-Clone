import React, { useState } from "react";
import Item from '../components/Item';
import DropWrapper from '../components/DropWrapper';
import Column from '../components/Column';
import { data, statuses } from '../data';

const Homepage = props => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.statuses === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return { ...newItems };
        });

        const moveItem = (dragIndex, hoverIndex) => {
            const item = items[dragIndex];
            setItems(prevState => {
                const newItems = prevState.filter((i, idx) => idx !== dragIndex);
                return [...newItems];
            });
        }
    };

    return (
        <div className={'row'}>
            {statuses.map(s => {
                return (
                    <div key={s.status} className={'col-wrapper'}>
                        <h2 className={'col-header'}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Column>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} index={idx} moveItem={moveItem} status={s}/>)}
                            </Column>
                        </DropWrapper>
                    </div>
                );
            })}
        </div>
    );
};

export default Homepage;