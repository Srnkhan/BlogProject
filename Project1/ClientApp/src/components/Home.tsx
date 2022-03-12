import * as React from 'react';
import { connect } from 'react-redux';

import { SrnkTextField } from '../SrnkBlogComponents/SrnkTextField';

const OnChange = (event , document) => {
    debugger;
}
const Home = () => (
    
  <div>
   
        {/*<Button variant="outlined" href="#outlined-buttons">*/}
        {/*    Click ME*/}
        {/*</Button>*/}
        {/*<TextField id="standard-basic" label="Standard" variant="standard" />*/}
        <SrnkTextField
            id='TestTextField'
            Label='TextField'
            onChange={OnChange}
            name='TestTextField'
            defaultValue='TestTextMessage'
        />
    </div>
);

export default connect()(Home);
