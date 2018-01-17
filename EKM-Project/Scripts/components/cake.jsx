class App extends React.Component {
    state = {
        shoppingList: [],
        cakes: {},
        isBasketOpen: false,
        totalPrice: 0.00,
        showOrderSummary: false,
        isBasketEmpty: true
    }

    componentDidMount = () => {
        axios.get("api/cakes").then(response => {
            this.setState({ cakes: [...response.data] });
        });
    }

    AddToShoppingList = (cake) => {
        let list = this.state.shoppingList;
        list.push(cake);



        this.setState({
            shoppingList: list,
            totalPrice: this.state.totalPrice + cake.Price,
            isBasketEmpty: false
        });

    }


    RemoveFromShoppingList = (index, cake) => {

        let list = this.state.shoppingList;
        let basketEmpty = false;
        list.indexOf(index);
        list.splice(index, 1);

        let newTotal = this.state.totalPrice - cake.Price;

        if (newTotal <= 0.00) {
            newTotal = 0.00;
        }

        if (this.state.shoppingList.length === 0) {
            basketEmpty = true;
        }
        this.setState({
                shoppingList: list,
                totalPrice: newTotal,
                isBasketEmpty: basketEmpty
            });

    }

    CheckoutHandler = () => {
        this.setState({
            showOrderSummary: true
        });
    }

    ToggleBasket = () => {
        const open = this.state.isBasketOpen;
        this.setState({
            isBasketOpen: !open
        });
    }

    render() {

        const Checkout = () => <button onClick={this.CheckoutHandler} className="btn btn-success" style={{ width: "100%", bottom: "0px", height: "35px", fontSize: "13px", borderRadius: "0px", position: "sticky" }} onClick={this.CheckoutHandler}>Checkout</button>;

        const OrderBasket = () => {

            const array = [...this.state.shoppingList];
            const list = array.map((cake, index) => {

                return (
                    <div style={{ fontSize: "12px", display: "flex", textAlign: "center" }} key={index}>

                        <div style={{ borderRight: "1px solid #555", width: "100%" }}>
                            <p >{cake.CakeName}</p>
                        </div>
                        <div style={{ width: "100%" }}>
                            <p>£{cake.Price}</p><button onClick={(event) => this.RemoveFromShoppingList(index, cake)} style={{ border: "none", outline: "none", borderRadius: "5px", color: "#fff", backgroundColor: "red", float: "right", marginTop: "-28px", marginRight: "4px", marginBottom: "3px", height: "20px", width: "20px", textAlign: "center", fontSize: "9px" }}><strong>X</strong></button>
                        </div>
                    </div>);

            });

            let noItems = null;
            let emptyBasket = null;

            if (this.state.shoppingList.length === 0) {
                noItems = <p style={{ textAlign: "center", fontSize: "16px" }}>Basket empty</p>;
            } else {
                noItems = <div>{list}</div>;
            }

            if (!this.state.isBasketEmpty) {
                emptyBasket = <Checkout/>;
            }

            return (
                <div style={{ marginBottom: "10px", width: "250px", height: "330px", border: "1px solid #444", backgroundColor: "white", position: "absolute", right: "10px", bottom: "0", overflow: "auto", overflowX: "hidden" }}>
                    <div onClick={this.ToggleBasket} style={{ lineHeight: "25px", fontSize: "15px", height: "30px", cursor: "pointer", position: "sticky", width: "inherit", color: "#fff", backgroundColor: "#246CCC", textAlign: "center", borderBottom: "1px solid #444", top: "0" }}>Shopping Basket</div>
                    <div style={{fontSize: "13px", display: "flex", textAlign: "center", borderBottom: "1px solid #444", marginBottom: "10px" }}><h4 style={{ width: "100%", borderRight: "1px solid #444" }}>Product</h4><h4 style={{ width: "100%" }}>Price</h4></div>
                    {noItems}
                    <div style={{ backgroundColor: "#fff", borderTop: "1px solid #444", width: "100%", textAlign: "right", fontSize: "14px", paddingRight: "5px", bottom: "35px", position: "sticky" }} >Total Price: £{this.state.totalPrice.toFixed(2)}</div>
                     {emptyBasket}
                </div>
            );
        };

        const OrderSummary = () => {

            const shoppingList = [...this.state.shoppingList];
            const list = shoppingList.map((item, index) => {
                return (
                    <div key={index} style={{ fontSize: "12px", display: "flex", alignItems: "flex-end", justifyContent: "center", textAlign: "center" }}>
                        <div style={{width: "100%", borderRight: "1px solid #444"}}>
                            <p >
                                {item.CakeName}
                            </p>
                        </div>
                        <div style={{ width: "100%" }}>
                            <p >
                                £{item.Price.toFixed(2)}
                            </p>
                        </div>
                </div>
                );
            });

            let noItems = null;

            if (this.state.shoppingList.length) {
                noItems = <div>{list}</div>;
            } else {
                noItems = <p style={{ textAlign: "center", fontSize: "16px" }}>Order empty</p>;
            }

            return (

                <div>
                <div style={{
                    width: "60%",
                    height: "500px",
                    margin: "auto",
                    backgroundColor: "#fff", textAlign: "center", color: "#000", border: "1px solid #444", overflow: "auto"
                }}><div style={{ textAlign: "center", backgroundColor: "#246CCC", color: "#fff", position: "sticky", top: "0", width: "auto", height: "50px", fontSize: "17px", lineHeight: "45px" }}>Order Summary</div>
                    <div style={{ height: "50%" }}>
                        <div style={{ display: "flex", flexFlow: "row", borderBottom: "1px solid #444", marginBottom: "10px" }}><h4 style={{ width: "100%", borderRight: "1px solid #444" }}>Product</h4><h4 style={{ width: "100%" }}>Price</h4></div>
                        {noItems}
                        <div style={{ backgroundColor: "#fff", borderTop: "1px solid #444", width: "100%", textAlign: "right", fontSize: "14px", paddingRight: "5px", bottom: "0px", position: "sticky" }} >Total Price: £{this.state.totalPrice.toFixed(2)}</div>
                        
                    </div>
                </div><div style={{height: "55%", display: "flex", alignContent: "flex-end", justifyContent: "center", marginTop: "10px" }}>
                        <button className="btn btn-primary">Pay by Cash</button>
                        <button className="btn btn-warning">Pay by Card</button>
                    </div></div>);
        }

        const style = {
            width: "100%",
            height: "100px",
            backgroundColor: "white",
            marginBottom: "10px",
            display: "flex",
            flexFlow: "row",
            border: "1px solid #888"

        };

        const cakeName = {
            width: "100%",
            height: "100%",
            textAlign: "center",
            lineHeight: "90px",
            overflow: "hidden", borderRight: "1px solid #444" 
    }

        const cakeDesc = {
            width: "100%", height: "100%",
            textAlign: "center",
            lineHeight: "90px",
            fontSize: "14px",
            overflow: "hidden", borderRight: "1px solid #444"
        }

        const cakePrice = {
            width: "100%", height: "100%",
            textAlign: "center",
            lineHeight: "90px", borderRight: "1px solid #444"
        }

        const cakeArray = [...this.state.cakes];
        const result = cakeArray.map((cake, index) => {
            return (
                <div key={index}>
                    <div style={{ height: "10px", width: "100%", backgroundColor: "#2d87ff"}}></div>
                    <div style={style}>
                        <p style={cakeName}>
                            {cake.CakeName}
                        </p>
                        <p style={cakeDesc}>
                            {cake.CakeDescription}
                        </p>
                        <p style={cakePrice}>
                            £{cake.Price.toFixed(2)}
                        </p>
                        <button className="btn btn-default" onClick={(event) => this.AddToShoppingList(cake)} key={index} style={{ width: "200px", fontSize: "14px", margin: "25px", height: "50px", width: "50px" }}>Add</button>
                    </div>
                </div>
            );
        });

        let openCart = null;

        if (this.state.isBasketOpen) {
            openCart = <OrderBasket />;
        } else {
            const OpenOrderSummary = () => {
                return (
                    <div onClick={this.ToggleBasket} style={{ lineHeight: "45px", fontSize: "18px", cursor: "pointer", color: "#fff", backgroundColor: "#246CCC", textAlign: "center", border: "1px solid #444", width: "140px", height: "50px", position: "absolute", right: "10px", bottom: "10px" }}>
                        Open Basket</div>
                );
            }
            openCart = <OpenOrderSummary />;
        }

        let order = null;

        if (this.state.showOrderSummary) {
            order = <OrderSummary />;
        } else {
            order = <div>{result}</div>;
        }

        return (
            <div style={{paddingRight: "10px", paddingLeft: "10px", backgroundColor:"transparent", marginTop: "20px"}}>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", borderBottom: "1px solid #444", marginBottom: "10px" }}>
                    <h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>Product</h4>
                    <h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>Description</h4>
                    <h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>Price</h4>
                    <h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "50%" }}></h4>
                </div>
                {order}
                {openCart}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));