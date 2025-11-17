//nullable type

const getUser = (input : string | null ) =>{
  if (input ) {
    console.log(`User From DB: ${input}`)
  } else{
    console.log('All User Form DB')
  }
}
getUser(null);

//unknown type 

const discountCalculator = ( price : unknown ) =>{

  if( typeof price === "number"){
    const discount = price * 0.1;
    console.log(discount)
  } else if (typeof price === 'string'){
    const [splittedPrice] = price.split(' ');
    const discount = Number(splittedPrice) * 0.1
    console.log(discount)
  } else {
    console.log("Invalid Price")
  }

}

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);

//void

const throwError = (message : string) : never =>{
  throw new Error(message);
}

throwError('Error ...')