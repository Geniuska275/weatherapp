import { useState ,useEffect} from "react"
import { RxCaretDown,RxCaretUp } from "react-icons/rx";

export default function Accordions(){
	const [selected,setSelected]=useState(null)
 const toggle=(i)=>{
     if(selected == i){
		 return setSelected(null)
	 }
	 setSelected(i)

 }
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
 let frequentlyAsked = [
		{
			summary: "What is Viscio?",
			details:
				"Viscio express practically leverages on the domain strengths of various logistics agents and niche courier companies across Africa. With the simple convenience of a smartphone, we have smartly eliminated traditional logistics operations barriers that make movement of goods from one point to another in Africa seem like rocket science. Our operational model, harmonized with our deployed technology tools enables us to seamlessly address your logistics needs affordably, reliably and with utmost peace of mind.",
		},
		{
			summary: "How to make a delivery order",
			details:
				"Simply download the Viscio express app and register, then proceed to select type of transaction (city or intercity); then provide required details and available agents will be matched with your request in real time.",
		},
		{
			summary: "How do i make payment?",
			details:
				"Payment is required on the app before you are matched with any logistics agent, however, this payment is captured in our escrow system and logistics agents only get paid after successful completion of your delivery. Our payment channels are secure and safe.",
		},
		{
			summary: "How safe are my goods to be delivered?",
			details:
				"Viscio is fully committed to ensuring seamless and safe movement of goods from pickup to destination. Our platform ensures transparency of goods in-transit by prescreened logistics agents via our mapping systems and telematics framework. In addition to this, Viscio ensures end-to-end operational efficiency in all our logistics transactions which are fully insured (by our NAICOM licensed provider) and smartly tracked.",
		},
		{
			summary: "How can i become a logistics agent",
			details:
				"You can begin the amazing journey of becoming your own boss by earning on the Viscio platform when you fulfill delivery requests as our logistics agent. All that is simply required are your personal details and details of your mobility asset. Follow the link and learn more about our criteria and on-boarding process.",
		},
	];
	return(
		<div style={{marginTop:"140px"}}>

			<h1 className="font-[30px] text-[#022888] text-center text-2xl">Frequently Asked Questions</h1>
		
		<div className="flex justify-center items-center">
			<div className="accordion">
				{frequentlyAsked.map((item,i)=>(
					<div className="   w-[300px] mx-7 md:w-[1200px] p-[30px] border-2 shadow-lg rounded-2xl m-10  border-[#022288] ">
						<div className="flex items-center text-[#022288] justify-between" onClick={()=>toggle(i)}>
							<h4 style={{color:"#022288",textTransform:"lowercase",fontWeight:"bold"}}>{item.summary}</h4>
							<h6 >{selected == i ? <RxCaretDown style={{color:"#022888",fontSize:"20px"}}/>:<RxCaretUp style={{color:"#022888",fontSize:"20px"}}/>}</h6>
						</div>
						<div className={selected ==i ? "content-show":"content"}>
							{item.details}
						</div>						
					</div>
				))}
			</div>
		</div>
		</div>
	)
}