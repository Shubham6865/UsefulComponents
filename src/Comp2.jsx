import React, { useContext } from 'react';
import {MyContext} from '../src/App';
function Comp2() {
const theme = useContext(MyContext);
return (
<>
<div className={theme}>This is Component <h1>2</h1></div>
</>
)
}
export default Comp2;
