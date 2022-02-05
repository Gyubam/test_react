import React from 'react';

const MyComponent = props => {
    return <div>제이름은 
        {props.name}입니다. <br />
        children 값은 {props.children}입니다.
    </div>


}
export default MyComponent;