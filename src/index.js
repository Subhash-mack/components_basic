import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './Approvalcard';
const App = () =>{
    return (
      <div className="ui container comments">
         <ApprovalCard>        
        <CommentDetail author="Sam" time="Today at 6:00 PM" content="This is new blog" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>  
         <CommentDetail author="Alex" time="Today at 7:00 PM" content="This is new blog1" image={faker.image.avatar()}/>
         </ApprovalCard>
         <ApprovalCard>  
         <CommentDetail author="Jane" time="Today at 8:00 PM" content="This is new blog2" image={faker.image.avatar()}/>
         </ApprovalCard>
         <ApprovalCard>  
         <CommentDetail author="Subhash" time="Today at 9:00 PM" content="This is new blog3" image={faker.image.avatar()}/>
         </ApprovalCard>
      </div>  
    );
};

ReactDOM.render(<App />,document.querySelector('#root'))