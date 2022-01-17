//home components imports
import { connect } from "react-redux";

import InputSearch from "../../components/InputSearch/inputSearch";
import Carrousel from "../../components/Carrousel/carrousel";

const Home = ({ searchMapped }) => {

  return (
    <>
      {/* {searchMapped} */}
      <div>
        <Carrousel />
        <InputSearch />
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     searchMapped: state.search,
//   };
// };

// const reduxHoc = connect(mapStateToProps);

export default Home;
