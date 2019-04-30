import React from 'react';
// import PropTypes from 'prop-types';

// class KegAmount extends React.Component {
function KegAmount(){
  // constructor(props){
  //   super(props);
  //   this.state={
  //     kegFull: true
  //   };
  //   console.log(props.beerMaster + 'hi');
  // }
  //
  // handlePourBeer(){
  //   this.setState({kegFull: true});
  // }
  //
  // render(){
  //   let kegVol = null;
  //   if (this.state.kegFull){
  //     kegVol = <PourBeer onPourPint={this.props.onPourPint}/>;
  //   } else {
  //     kegVol = 124
  //   }
  // }
  let kegVol = 124;
  return(
    <div className='amount'>
      {kegVol + ' pints'}
    </div>
  )
}

// KegAmount.propTypes = {
//   onPourPint: PropTypes.func
// }

export default KegAmount;
