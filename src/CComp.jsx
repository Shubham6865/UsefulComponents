import React, { useContext } from 'react';
import { MyContext } from '../src/App';
function CComp() {
const theme = useContext(MyContext);
return (
<>
<div className={theme}>
This is Child <h1>C 1</h1> of component 1</div>
</>
);
}
export default CComp;
