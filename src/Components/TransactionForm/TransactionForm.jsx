const TransactionForm = () => {
   return (
      <>
         <select name="transType" id="">
            <option value="incomes">Incomes</option>
            <option value="costs">Сosts</option>
         </select>
         <form action="">
            <label>
               Day
               <input type="date" />
            </label>
            <label htmlFor="">
               Time
               <input type="date" />
            </label>
            <label>
               Category
               <input value="Meal" type="button" />
            </label>
            <label >
               Total
               <input type="text" placeholder="Enter the price"/>
            </label>
            <label >
               Currency
               <input type="button" value="EUR"/>
            </label>
            <label >
               <input type="text" value="Comments"/>
            </label>
         </form>
      </>
   )
}
export default TransactionForm