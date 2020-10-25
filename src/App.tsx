import React, { useEffect } from 'react';
import './App.css';
import Title from './Title'
import Card from './Card';
import Ending from './Ending'
import NavBar from './NavBar';
import CommentSection from './CommentSection'
import DisplayPhoneCards from './DisplayPhoneCards';
import { useDispatch } from 'react-redux';
import { checkLoggedIn, getFetchedComments, GetTokenAsString, getUserDataResponse, IResponseFromJWT } from './HelperFunctions';



let App = () => {
  const dispatch = useDispatch();
  const token = GetTokenAsString();

  useEffect(() => {
    (async () => {
      const commentsData = await getFetchedComments()
      dispatch({ type: "ADD_COMMENT_LIST", payload: commentsData })
      const isJWTInStorage: Boolean = await checkLoggedIn(token);
      if (isJWTInStorage) {
        let UserData: IResponseFromJWT = await getUserDataResponse(token)
        dispatch({ type: "ADD_USER_DATA", payload: UserData })
      }
    })()
  }, [])

  return <div className="App">
    <NavBar />
    <div className="Align">
      <Title />
      <DisplayPhoneCards />
      <Ending />
      <CommentSection />
    </div>
  </div>
}

export default App;

/*

Next 10 Mins:
  2.) Check all see indept... links
  3.) check all ebay links
  4.) Change introduction text


Clone: https://www.cnet.com/news/best-cheap-earbuds-and-headphones-of-2020/ (Without the Table)
  - Use a different better looking table from a different site
  - Find my own phones under $50
  - Replace it

Tables:
  - https://techguided.com/best-cheap-gaming-mouse/
  - https://headphonesaddict.com/best-cheap-headphones/
*/

/*
  #- SEO (1:00 PM) [Im doing a text next time I'll rename it to something specific like Best budget phones under $100]
  #- Hook Title (11:45 PM)
  #- Better Styling compare it to another website
  #- Update the updated text september... (11:30 PM)
  #- Update Links (12:00 PM)
  #- Fix Grammar (12:30 PM)
  #Search Title: Best budget phones under $60, $80, $100 and $120
  #Description: I've rounded up the best budget phones under $60, $80, $100 and $120. Comparing specs and prices to give you the best bang 
  #for your buck with links for each of the phones for you check them out and buy.
  #'- Refferral

SEO
  > Gambling putting under $60, $80, $100, and $120 instead of the most popular result under $100
  > Decent title the description is mehhh but no one reads it every way
  > I have no backlinks so oof
  > Refferral
  > 

  Rehheat cappachio
  Craft two cluster jewels 12 mnins or 2:52
  work on website

----------------------------------------------------------------------------------------------

Left To Do:
  - Make cards only display data & Array of data in App
  - Title
  - Image
  - Text of comparing phones, how many I compared, where to compare
  - STUFF (With VS)
  - Update index.html title and something
  - SEO
  - Host on github, if theres time buy a domain and host it

I really dislike the scrolling all the way down for a headphones
I would rather make a page 

After this game do Victors homework


You could do a scroll down but it SHORT, CONCISE MEANINGFUL, PICTURES
https://backlinko.com/seo-checklist


https://www.rtings.com/headphones/reviews/best/by-usage/gaming
I like this rating system

I dont really like the words

Whenvever you want to buy headphones!
https://www.rtings.com/headphones/reviews/mpow/059-wireless ratings comparison

https://www.pcgamer.com/the-best-gaming-mouse/
I like the scrolling images
*/


/*

Title: Best Budget Phones (Under X, X, X, X)
Description: 


WebPage:
  Black-Grey Background

  No NavBar
  <BestBudgetPhonesTable />
    - Title:
    - Table:  (Product) Picutre + Name | (Price)
  <PhoneCard />
    - 


Motorola Moto Z Droid - $60 https://www.ebay.com/itm/Motorola-Moto-Z-Droid-32GB-Verizon-GSM-Unlocked-Exceptional-to-Fair/184444469397?epid=7024487679&hash=item2af1bf4095:g:nD4AAOSwBdRfXNCE
LG G5 (11 vs 8) WON! - $60 https://www.ebay.com/itm/LG-G5-H830-32GB-T-Mobile-Great-Condition-Silver-Clean-IMEI-See-Screen/233686180526?epid=220956996&hash=item3668c822ae:g:otAAAOSwvgdfPWM2
LG G6 (05 vs 17) WON! - $82 https://www.ebay.com/itm/LG-G6-32GB-Black-LG-LS993-Sprint-Android-Smartphone-KG637/283990005007?hash=item421f1f950f:g:6BcAAOSwxddfRS1z#viTabs_0
Google Pixel XL - $100 (11 vs 10) WON! https://www.ebay.com/itm/Google-Pixel-XL-32GB-Black-Fully-Unlocked-Smartphone/124302613603?epid=229403262&hash=item1cf1035c63:g:-40AAOSw6KhfOuhH
Samsung Galaxy Note 4 - $100 (13 vs 18) WON! 
Samsung Galaxy Note 5 - $120 (11 vs 16) WON!
Google Pixel 2 - $120 (10 vs 13) WON!

Table

~Comparing Phones

Under $60
  - Motorola Moto Z Droid (1 vs 1) - $60
  - LG G5 (11 vs 8) WON! - $60

Under $80
  - LG G6 (05 vs 17) WON! - $82

Under $100
  - Google Pixel XL - $100 (11 vs 10)
  - Samsung Galaxy Note 4 - $100 (13 vs 18)

Under $120
  - Google Pixel 2 - $120 (10 vs 13) WON!
  - Samsung Galaxy Note 5 - $120 (11 vs 16) WON!


Layout:
  Header: Motorola Moto Z Droid (Under $60)
  Line: Short Gray Line
  Picture: Left-Side | Title: Title & Price range under it, Example Ebay Price link
  Phone Specs: Under Picture


BenchMarkList
  > https://www.androidbenchmark.net/passmark_chart.html
  > http://www.antutu.com/en/ranking/rank1.htm
  > https://benchmarks.ul.com/compare/best-smartphones
  > https://www.phonearena.com/phones/benchmarks
  > https://browser.geekbench.com/mobile-benchmarks
  > https://www.phonecurry.com/benchmarks


ROG Phone 3 - $1,549
OnePlus 8 Pro - $700
OPPO Find X2 Pro - $500
Galaxy Note20 Ultra 5G - $1,100
Redmi K30 Pro - $400
Poco F2 Pro - $500
Mi 10 - $600
Samsung Electronics Galaxy Note 20 - $1,249
Galaxy S20 Ultra 5G - $1,377
Galaxy S20+ 5G - $1,177
Galaxy S20+ 5G - $1000
Galaxy S20 5G - $1000
realme X3 - $300
realme X2 Pro - $300
ROG Phone 2 - $1000
HUAWEI P40 Pro 5G - $1000
OnePlus 7 Pro - $500
Galaxy S10 Lite - $650
Galaxy Note10+ - $1000
Mi 9 - $300
Galaxy Note10 - $1000
Mi 9T Pro - $500
Redmi K20 Pro - $300
Galaxy S10+ - $600
Galaxy S10e - $600
Galaxy S10 - $600
HONOR 20 Pro - $400
LG V50 ThinQ 5G - $400
HUAWEI P30 Pro - $660
HUAWEI nova 7 - $300
HONOR 20 - $400
HUAWEI nova 5T - $380
HUAWEI P30  - $200
HUAWEI Mate 20 Pro - $570
POCOPHONE F1 - $500
Mi 8 - $180
Galaxy Note 9 - $500
Mi MIX 2S - $500
Galaxy Note 10 Lite - $420
OnePlus Nord - $400
Galaxy S9+ - $500
Galaxy Note 9 - $1000
Redmi K30 5G - $400
HUAWEI nova 7i - $100
LG G7 ThinQ - $173
realme 6 - $316
Redmi Note 8 Pro - $204
realme 6 Pro - $316
Galaxy S9 - $700
Redmi Note 9 Pro - $234
Redmi Note 9S - $269
OPPO Reno4 4G - $????
Mi Note 10 Pro - $424
Mi Note 10 Lite - $334
Mi Note 10 - $424
Mi 9T - $???
Galaxy A71 - $500
HUAWEI P20 Pro - $290
Galaxy Note 8 - $330
HUAWEI Mate 10 Pro - $500
realme XT - $???
Galaxy S8 - $220
Sony Xperia XZ1 - $350
HONOR 10 - $200
Galaxy S8+ - $250
Google Pixel 2 XL - $190
HONOR Play - $400
Galaxy A70 - $340
Mi 9 Lite - $280
Redmi Note 7 Pro - $200
realme X Lite - $???
Redmi 10X 4G - $162
Redmi 9 - $150
Galaxy A51 - $280
Galaxy M31 - $199
Galaxy S7 - $100
Redmi Note 9 - $200
Galaxy S7 Edge - $199
Mi 8 Lite - $180
Redmi Note 7 - $150
Galaxy M21 - $232
Mi A3 - $300
HONOR 9X - $239
Redmi Note 8 - $180
Redmi Note 8T - $176
Vsmart Active 3 - $No Exist
realme 5i - $240
Mi A2 - $No Exist
HONOR 8X - $150
HONOR 10i  - $

<Under $60>
Motorola Moto Z Droid - $60
Motorola Moto E6 - $60 (Moto_Z_Droid)
Motorola Moto G Play - $54 (Moto_Z_Droid)
Coolpad Legacy - $50 (Moto_Z_Droid)
Nokia 3.1 - $60
Motorola Moto E (4th Gen.) XT1764 - $55
LG K30 - $60
BLU C5 2019 - $55

<Under $80>
?Ulefone Note 7 - $82
SAMSUNG Galaxy A10e - $80 (25 vs 6)
?UMIDIGI A3S - $70 (20 vs 10)
Nokia 3.1 Plus - $80
?Alcatel 1X - $80
Motorola Moto E5 Play $75 (24 vs 6)
LG K20 M255 4G LTE - $70
Mobile Samsung Galaxy A01 4G - $80 (24 vs 10)
LG G3 - $80
BLU - Vivo XI - $75
HUAWEI P8 Lite ALE-L23 - $80
LG X Venture H700 - $75

<Under $100>
LG K40 - $80 (19 vs 10)
//iPhone SE - $90 
Nokia 2.2 - $99 (24 vs 9)
Samsung Galaxy A10e - $90 (25 vs 06)
Motorola Moto E6 Plus - $100 (20 vs 13)
?CellAllure - Cool Extreme - $85
?CellAllure - Fashion C - $85
Samsung Galaxy A10E - $88
Motorola Moto E5 - $100
Blu Vivo X5 - $110 (21 vs 8)
?UMIDIGI A3S - $110
Ulefone Note 7 - $100
Samsung Galaxy A01 - $100
BLU - G70 - $100
Motorola moto g - $100
Alcatel - AVALON V - $100 (26 vs 5)
Samsung Galaxy Note 5 - $100 (11 vs 16) WON!
Google Pixel 2 - $100 (10 vs 13) WON!
Apple iPhone SE 1'st Generation - $100
UMIDIGI A3S - $110
HTC 10 - $100 (10 vs 11) WON!
Samsung Galaxy A6 - $100
Samsung Galaxy J7 - $100
BLU G70 G0250WW - $100
Google Pixel 2 - $100 (10 vs 13) WON!
LG Stylo 4++ Plus LMQ710WA - $90 (16 vs 10)
Apple iPhone 6 - $110
Samsung Galaxy S7 - $90 
Samsung Galaxy S6 SM-G920A - $90
LG K40 LM-X420A - $90
BLU G70 G0250WW - $100



Motorola Moto G Fast - $170
Samsung Galaxy A11 - $150
Motorola Moto E - $150
Google Pixel 4a - $320
Moto G Power - $150
Moto G Stylus - $300
Samsung Galaxy A51 - $400
TCL 10L - $250
ZTE Blade 10 Prime $???
Samsung Galaxy A20 - $150
Apple iPhone SE - $400
Motorola Moto e - $130
Nokia C5 Endi - $170
*/

/*

3:30 - HW 1
5:00 - HW 2
6:30 - HW 3
8:00 - HW 4


Under Under $60, $70-75, $100


*/
