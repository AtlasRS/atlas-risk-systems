// Fields component contains logic for rendering single input fields
import React from 'react';

const style = {
  color: 'red',
};

const Entity = ['Denver Basecamp', 'Ski Lodge', 'Eagle Tower']

const City = [
"Aberdeen","Abilene","Akron","Albany","Albuquerque","Alexandria","Allentown","Amarillo","Anaheim","Anchorage","Ann Arbor","Antioch","Apple Valley","Appleton","Arlington","Arvada","Asheville","Athens","Atlanta","Atlantic City","Augusta","Aurora","Austin","Bakersfield","Baltimore","Barnstable","Baton Rouge","Beaumont","Bel Air","Bellevue","Berkeley","Bethlehem","Billings","Birmingham","Bloomington","Boise","Boise City","Bonita Springs","Boston","Boulder","Bradenton","Bremerton","Bridgeport","Brighton","Brownsville","Bryan","Buffalo","Burbank","Burlington","Cambridge","Canton","Cape Coral","Carrollton","Cary","Cathedral City","Cedar Rapids","Champaign","Chandler","Charleston","Charlotte","Chattanooga","Chesapeake","Chicago","Chula Vista","Cincinnati","Clarke County","Clarksville","Clearwater","Cleveland","College Station","Colorado Springs","Columbia","Columbus","Concord","Coral Springs","Corona","Corpus Christi","Costa Mesa","Dallas","Daly City","Danbury","Davenport","Davidson County","Dayton","Daytona Beach","Deltona","Denton","Denver","Des Moines","Detroit","Downey","Duluth","Durham","El Monte","El Paso","Elizabeth","Elk Grove","Elkhart","Erie","Escondido","Eugene","Evansville","Fairfield","Fargo","Fayetteville","Fitchburg","Flint","Fontana","Fort Collins","Fort Lauderdale","Fort Smith","Fort Walton Beach","Fort Wayne","Fort Worth","Frederick","Fremont","Fresno","Fullerton","Gainesville","Garden Grove","Garland","Gastonia","Gilbert","Glendale","Grand Prairie","Grand Rapids","Grayslake","Green Bay","GreenBay","Greensboro","Greenville","Gulfport-Biloxi","Hagerstown","Hampton","Harlingen","Harrisburg","Hartford","Havre de Grace","Hayward","Hemet","Henderson","Hesperia","Hialeah","Hickory","High Point","Hollywood","Honolulu","Houma","Houston","Howell","Huntington","Huntington Beach","Huntsville","Independence","Indianapolis","Inglewood","Irvine","Irving","Jackson","Jacksonville","Jefferson","Jersey City","Johnson City","Joliet","Kailua","Kalamazoo","Kaneohe","Kansas City","Kennewick","Kenosha","Killeen","Kissimmee","Knoxville","Lacey","Lafayette","Lake Charles","Lakeland","Lakewood","Lancaster","Lansing","Laredo","Las Cruces","Las Vegas","Layton","Leominster","Lewisville","Lexington","Lincoln","Little Rock","Long Beach","Lorain","Los Angeles","Louisville","Lowell","Lubbock","Macon","Madison","Manchester","Marina","Marysville","McAllen","McHenry","Medford","Melbourne","Memphis","Merced","Mesa","Mesquite","Miami","Milwaukee","Minneapolis","Miramar","Mission Viejo","Mobile","Modesto","Monroe","Monterey","Montgomery","Moreno Valley","Murfreesboro","Murrieta","Muskegon","Myrtle Beach","Naperville","Naples","Nashua","Nashville","New Bedford","New Haven","New London","New Orleans","New York","New York City","Newark","Newburgh","Newport News","Norfolk","Normal","Norman","North Charleston","North Las Vegas","North Port","Norwalk","Norwich","Oakland","Ocala","Oceanside","Odessa","Ogden","Oklahoma City","Olathe","Olympia","Omaha","Ontario","Orange","Orem","Orlando","Overland Park","Oxnard","Palm Bay","Palm Springs","Palmdale","Panama City","Pasadena","Paterson","Pembroke Pines","Pensacola","Peoria","Philadelphia","Phoenix","Pittsburgh","Plano","Pomona","Pompano Beach","Port Arthur","Port Orange","Port Saint Lucie","Port St. Lucie","Portland","Portsmouth","Poughkeepsie","Providence","Provo","Pueblo","Punta Gorda","Racine","Raleigh","Rancho Cucamonga","Reading","Redding","Reno","Richland","Richmond","Richmond County","Riverside","Roanoke","Rochester","Rockford","Roseville","Round Lake Beach","Sacramento","Saginaw","Saint Louis","Saint Paul","Saint Petersburg","Salem","Salinas","Salt Lake City","San Antonio","San Bernardino","San Buenaventura","San Diego","San Francisco","San Jose","Santa Ana","Santa Barbara","Santa Clara","Santa Clarita","Santa Cruz","Santa Maria","Santa Rosa","Sarasota","Savannah","Scottsdale","Scranton","Seaside","Seattle","Sebastian","Shreveport","Simi Valley","Sioux City","Sioux Falls","South Bend","South Lyon","Spartanburg","Spokane","Springdale","Springfield","St. Louis","St. Paul","St. Petersburg","Stamford","Sterling Heights","Stockton","Sunnyvale","Syracuse","Tacoma","Tallahassee","Tampa","Temecula","Tempe","Thornton","Thousand Oaks","Toledo","Topeka","Torrance","Trenton","Tucson","Tulsa","Tuscaloosa","Tyler","Utica","Vallejo","Vancouver","Vero Beach","Victorville","Virginia Beach","Visalia","Waco","Warren","Washington","Waterbury","Waterloo","West Covina","West Valley City","Westminster","Wichita","Wilmington","Winston","Winter Haven","Worcester","Yakima","Yonkers","York","Youngstown"]

const State = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]

const Country = ["United States", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]

const VehicleType = ["Bus", "Car", "Minivan", "Truck", "SUV", "Van"]

const Make = ['Acura','Alfa Romeo','AMC','Aston Martin','Audi','Avanti','Bentley','BMW','Buick','Cadillac','Chevrolet','Chrysler','Daewoo','Daihatsu','Datsun','DeLorean','Dodge','Eagle','Ferrari','FIAT','Fisker','Ford','Freightliner','Geo','GMC','Honda','HUMMER','Hyundai','Infiniti','Isuzu','Jaguar','Jeep','Kia','Lamborghini','Lancia','Land Rover','Lexus','Lincoln','Lotus','Maserati','Maybach','Mazda','McLaren','Mercedes-Benz','Mercury','Merkur','MINI','Mitsubishi','Nissan','Oldsmobile','Peugeot','Plymouth','Pontiac','Porsche','RAM','Renault','Rolls-Royce','Saab','Saturn','Scion','smart','SRT','Sterling','Subaru','Suzuki','Tesla','Toyota','Triumph','Volkswagen','Volvo','Yu go']

const Year = [2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2001,2000,1999]

const Radius = [50,100,150,200,500,1000,2000,"Unlimited"]

let selectOptions;

export default ({ select, label, name, meta: { error, touched } }) => { // { input } analgous to props.input (contains all the callback functions)
  if(label === 'Entity') {
    selectOptions = Entity
  };

  if(label === 'Country') {
    selectOptions = Country
  };

  if(label === 'State') {
    selectOptions = State
  };

  if(label === 'City') {
    selectOptions = City
  };

  if(label === 'Operating Radius (Miles)') {
    selectOptions = Radius
  };

  if(label === 'Vehicle Type') {
    selectOptions = VehicleType
  };

  if(label === 'Make') {
    selectOptions = Make
  };

  if(label === 'Year') {
    selectOptions = Year
  };

  let optionValues =
    selectOptions.map(selectOption =>
      {
        return (
          <option value={selectOption} key={selectOption}>
            {selectOption}
          </option>
        )
      }
    )

  return (
    <div>
      <label>{label}</label>
      <select {...select} name={name}>
        <option value=''>Select {label}...</option>
        {optionValues}
      </select>
    </div>
  );
};
