import styles from "./App.module.css";
import { IdCard } from './iteration1/components/IdCards'
import { Greetings } from './iteration2/components/Greetings'
import { Random  } from './iteration3/components/Random'
import { BoxColor } from './iteration4/components/BoxColor'
import { CreditCard } from './iteration5/components/CreditCard'
import { Rating } from './iteration6/components/Rating'
import { ClickablePicture } from './iteration9/components/ClickablePicture'
import { LikeButton } from './iteration8/components/LikeButton/';
import { Dice } from './iteration10/components/Dice'

import max from "./assets/images/maxence.png"
import maxGlass from "./assets/images/maxence-glasses.png"

function App() {
  return (

    <>

      <div> <h1>Iteration 1</h1>

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          alt= "User Photo"
        />

        <br></br>

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          alt= "User Photo"
        />

        <hr></hr>

      </div>

      <div> <h1>Iteration 2</h1>

        <Greetings lang="fr">Anna</Greetings>

        <br></br>

        <Greetings lang="de">Ale</Greetings>

        <hr></hr>
      
      </div>

      <div> <h1>Iteration 3</h1>

        <Random min={1} max={6}/>

        <br></br>

        <Random min={1} max={100}/>

        <hr></hr>

      </div>

      <div> <h1> Iteration 4</h1>

        <BoxColor  r = { 255 }  g = { 0 }  b = { 0 }  /> 

        <br></br>


        <BoxColor  r = { 128 }  g = { 255 }  b = { 0 }  />

        <hr></hr>

      </div>


      <div><h1> Iteration 5</h1>
        <div className={styles.CreditCard}> 

          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" 
          />

          <br></br>
            
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />

          <br></br>
            
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" 
          />


        </div>
        <hr></hr>

      </div>

      <div> <h1> Iteration 6</h1>

        <br />
        <Rating>0</Rating>
        <br />
        <Rating>1.49</Rating>
        <br />
        <Rating>1.5</Rating>
        <br />
        <Rating>3</Rating>
        <br />
        <Rating>4</Rating>
        <br />
        <Rating>5</Rating>
    
        <hr></hr>
      </div>

      <div> <h1> Iteration 8</h1>

        <LikeButton />
        <LikeButton />

        <br />
        <hr></hr>
      </div>

      <div> <h1> Iteration 9</h1>

        <ClickablePicture
          img={max}
          imgClicked={maxGlass}
        />

        <hr></hr>
      </div>

      <div> <h1> Iteration 10</h1>

        <Dice />

        <hr></hr>
      </div>


    </>
  );
}

export default App;
