import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';

// export default function App () {
//   const isLarger = useMediaQuery ({
//     query : '(min-width: 800px)'
//   });
//   const isSmaller = useMediaQuery ({
//     query : '(max-width: 799px)'
//   });
//   console.log(isLarger);
  
//   return (
//     <div>
//       {isLarger && <p className='testText'>800px 이 넘었습니당.</p>}
//       {isSmaller && <p>799px 이하입니다!</p>}
//     </div>
//   )
// };
const Example = () => {
  const Large = ({children}) => {
    const isLarge = useMediaQuery ({
      query : '(min-width: 800px)'
    })
    return (isLarge ? children : null)
  };
  // const isLarger = useMediaQuery ({
  //   query : '(min-width: 800px)'
  // });
  const isSmaller = useMediaQuery ({
    query : '(max-width: 799px)'
  });
  console.log(isSmaller);
  
  return (
    <div>
      <Large>
        800px이 넘었습니다.
      </Large>
      {/* {isLarger && <p className='testText'>800px 이 넘었습니당.</p>} */}
      {isSmaller && <p>799px 이하입니다!</p>}
    </div>
  )
};
export default Example;
