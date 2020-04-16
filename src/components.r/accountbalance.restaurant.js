import React, { Component } from 'react';
import style from "./accountbalance.module.css";
import History from "./historyCard.js"


export default class RestaurantBalance extends Component {

    // for history list
    // accountHistoryList() {
    //     return this.state.histories.map(currenthistory => {
    //         return <History history={currenthistory} key={currenthistory.id} />
    //     })
    // }

    render() {
        return (
            <div>
                {/* account Balance */}
                <div className={style.accountTotal}>
                    <h5>account balance:</h5>
                    <h1 className = {style.balance}>41.58$</h1>
                </div>
                {/* payment History  */}
                <div className={style.accounthistory} >
                    <h5 className = {style.paymenttitle}>Payment history</h5>
                    <a className = {style.readmore} href="" >read more</a>
                    <table className="table table-bordered">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>amount</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>23</td>
                                <td>4/12/2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* recent charge */}
                <div className={style.recentcharge}>
                    <h5>recent ammount</h5>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>date</th>
                                <th>description</th>
                                <th>amount</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>3/01</td>
                                <td>monthy subscription</td>
                                <td>35.60</td>
                            </tr>
                            <tr>
                                <td>03/05</td>
                                <td>event post</td>
                                <td>5.99</td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td colspan="1">total</td>
                                <td>41.59</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className={style.paybutton}>pay</button>
                        <button type="button" className={style.changebutton}>change payment method</button>

                </div>
            </div>
        )
    }
}