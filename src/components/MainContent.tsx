import FavPlaceItem from "./FavPlaceItem";

function MainContent(): JSX.Element {
  return (
    <main>
      <FavPlaceItem
        placeName={"Neal's Yard"}
        imgSrc={
          "https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2019/01/18105423/neals-yard-covent-garden-london.jpg"
        }
        imgAlt={
          "The colourful Neal's Yard, with Neal's Yard Remedies at the centre"
        }
        location={"Convent Garden, London"}
        mapLink={
          "https://www.google.com/maps/place/Neal's+Yard,+London/@51.5144724,-0.1285418,17z/data=!3m1!4b1!4m5!3m4!1s0x487604cd28515fe1:0x54720e1a94469f73!8m2!3d51.5144724!4d-0.1263531"
        }
        description={
          "Neal's yard is a colourful courtyard full of kooky restaurants and shops. In my opinion, it's London's best worst-kept secret"
        }
        proTip={
          "inside the yard is Homeslice pizz. Make sure to try their Mushroom, ricotta, pumpkin seed and chilli pizza"
        }
      />
      <FavPlaceItem
        placeName={"Gulfoss"}
        imgSrc={
          "https://i.pinimg.com/originals/b4/6e/a6/b46ea629b09508901ce95d5f372b3ca1.jpg"
        }
        imgAlt={"Green Aurora Borealis over the Gulfoss Waterfalls"}
        location={"Southern Iceland"}
        mapLink={
          "https://www.google.com/maps/place/Gullfoss+Falls/@64.3266984,-20.1247905,16z/data=!3m1!4b1!4m5!3m4!1s0x48d6a574af45b6c9:0x2c6347db0b411601!8m2!3d64.3270716!4d-20.1199478?hl=en"
        }
        description={
          "Gullfoss (translated to 'Golden Falls') is one of Iceland's most iconic and beloved waterfalls, found in the Hvítá river canyon."
        }
        proTip={
          "Gulfoss forms part of the 'Golden Circle', alongside Thingvellir and Geysir. Make sure to visit them both, as well as the Secret lagoon spring, on your trip"
        }
      />
      <FavPlaceItem
        placeName={"Studland Bay"}
        imgSrc={"https://wdlh.co.uk/wp/wp-content/uploads/2018/11/DJI_0295.jpg"}
        imgAlt={"The gorgeous coastline at Studland Bay"}
        location={"Dorset, England"}
        mapLink={
          "https://www.google.com/maps?q=studland+bay+dorset&source=lmns&bih=577&biw=1280&hl=en&sa=X&ved=2ahUKEwiz54PxoN7zAhXPwYUKHfjEDFwQ_AUoAnoECAEQAg"
        }
        description={
          "The National Trust's Studland Beach is a vast area of sandy beaches and heathland with views of jurassic coastline features like Old Harry Rocks."
        }
        proTip={"The blackerry and clotted cream ice cream is second to none"}
      />
    </main>
  );
}
export default MainContent;
