const renderBook = ({title, img_url}) => {
  return (
    <div className="book">
      <img src={img_url} />
      <h3>{book.title}</h3>
    </div>
  )
}

const BookList = ({books}) => (
  <div className="book-list">
    {books.map(book => renderBook)}
  </div>
)

BookList.propTypes = {
  books: React.PropTypes.shape({
    img_url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  })
}

class BookListContainer extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    }
  }

  componentWillMount() {
    fetch('/api/current_user/book_list').then((res => this.setState({books: JSON.parse(res)})))
  }

  render() {
    return <BookList books={this.state.books} />
  }
}
