import '../../App.css';
import { useSelector } from 'react-redux';
import ListCard from './ListCard'


function ListsContainer() {
  const lists = useSelector(state => state.lists.collections)


  const displayLists = lists.map(list => {
    return <ListCard list={list} key={list.id}/>
  })
  
  return (
    <div className='list-cont'>
      <h2>Booklists:</h2>
      <p>Add any of these books to your own Books list by clicking on them</p>
      <div className='lists-holder'>
        {displayLists}
      </div>
    </div>
  );
}

export default ListsContainer;