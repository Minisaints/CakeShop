const CancelOrder = () => {
    return (<button className="btn btn-danger btn-block">Cancel</button>);
}

const Summary = () => {
    return(<button className="btn btn-primary btn-block">Summary</button>);
}

const Rows = (props) => {

    let array = props.OrderData;
    let newArray = array.map(data => {
        return <tr >
            <td>{data.Cake.CakeName}</td>
            <td>£{data.Cake.Price}</td>
            <td>{data.Status}</td>
            <td width="130px"><Summary /></td>
            <td width="130px"><CancelOrder/></td>
        </tr>;
    });

    return newArray;

}

class Table extends React.Component {
    state = {
        OrderData: []
    }

    componentDidMount = () => {
        axios.get("api/orders/" + document.getElementById("root").getAttribute("user"))
            .then(response => {
                console.log(response.data);
                this.setState({
                      OrderData: response.data
                });
            });
    }

    render() {
 

        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th width="130px">Summary</th>
                        <th width="130px">Cancel</th>
                    </tr>

                    </thead>
                    <tbody>
                    <Rows OrderData={this.state.OrderData}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Orders extends React.Component {
    render() {
        return (
             <Table/>   
            );
    }
}

ReactDOM.render(<Orders/>, document.getElementById("root"));