import {
  Navbar,
  PageWrapper,
  SearchForm,
  UsersCardContainer,
} from '../components';

const Search = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <SearchForm style={{ marginBottom: '20px' }} />
        <UsersCardContainer />
      </PageWrapper>
    </>
  );
};

export default Search;
