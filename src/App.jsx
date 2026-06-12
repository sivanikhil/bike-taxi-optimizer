import React, { useState, useEffect } from "react";
import { 
  Wifi, Battery, Signal, Navigation, Wallet, CheckCircle, 
  RefreshCw, AlertTriangle, ChevronRight, MapPin, Shield, User, 
  Star, Compass, Phone, MessageSquare, Crosshair, ArrowLeft, Bike
} from "lucide-react";

export default function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [appState, setAppState] = useState("incoming"); // 'incoming', 'navigating', 'completed'
  const [timeLeft, setTimeLeft] = useState(15);
  const [bikeProgress, setBikeProgress] = useState(0); // 0 to 100 percent along the route

  const currentTrip = {
    distance: "1.6 KM",
    fare: "₹32.50",
    pickup: "Madhapur Metro Station, Pillar 1742",
    drop: "Inorbit Mall Entrance, Hitech City",
    customer: "Rahul S.",
    rating: "4.9"
  };

  // Countdown timer for incoming request
  useEffect(() => {
    if (appState !== "incoming" || !isOnline) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 15; // Loop for simulation safety
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [appState, isOnline]);

  // Handle active navigation bike travel movement
  useEffect(() => {
    if (appState !== "navigating") return;
    
    const travelTimer = setInterval(() => {
      setBikeProgress((prev) => {
        if (prev >= 100) {
          clearInterval(travelTimer);
          setTimeout(() => setAppState("completed"), 800); // Transition to completion screen
          return 100;
        }
        return prev + 1.5; // Controls the speed of the bike on the map
      });
    }, 100);

    return () => clearInterval(travelTimer);
  }, [appState]);

  const handleAcceptRide = () => {
    setBikeProgress(0);
    setAppState("navigating");
  };

  const resetSimulation = () => {
    setAppState("incoming");
    setTimeLeft(15);
    setBikeProgress(0);
  };

  return (
    // PREMIUM OUTER PRESENTATION CANVAS
    <div className="relative min-h-screen bg-slate-950 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-12 overflow-hidden font-sans select-none">
      
      {/* Dynamic Futuristic Background Visuals */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse [animation-duration:6s]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse [animation-duration:8s]"></div>

      {/* LEFT SIDE: PRESENTATION TEXT INFO PANEL */}
      <div className="z-10 text-center lg:text-left lg:max-w-md lg:mr-16 mb-8 lg:mb-0 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold tracking-wide mb-4 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          Live Presentation Mode Active
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
          Smart Bike-Taxi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
            Optimizer App
          </span>
        </h1>
        <p className="mt-4 text-slate-400 text-sm lg:text-base font-medium leading-relaxed">
          An ultra-high fidelity dashboard designed for modern pilots. Features real-time geo-spatial route synchronization, live demand-surge calculations, and an automated dispatch matching algorithm.
        </p>
        
        {/* Quick Presentation Controls */}
        <div className="mt-6 p-4 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800/80 space-y-3 shadow-2xl">
          <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Simulation Controller</span>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <button 
              onClick={resetSimulation}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 shadow-md"
            >
              <RefreshCw size={13} /> Reset Trip Lifecycle
            </button>
            <button 
              onClick={() => setIsOnline(!isOnline)}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all border shadow-md ${
                isOnline ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              }`}
            >
              Force {isOnline ? 'Offline' : 'Online'} State
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: PREMIUM SMARTPHONE CONTAINER DECORATOR */}
      <div className="relative z-10 scale-95 sm:scale-100 transition-all duration-500">
        {/* Outer Phone Ambient Shadow Glow */}
        <div className="absolute inset-0 bg-amber-400/20 rounded-[54px] blur-3xl pointer-events-none opacity-40"></div>
        
        {/* Premium Hard-Shell Device Frame */}
        <div className="relative w-[385px] h-[812px] bg-slate-950 rounded-[54px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-[4px] border-slate-800 ring-[12px] ring-slate-900/40 flex flex-col overflow-hidden select-none">
          
          {/* TOP SMARTPHONE DYNAMIC ISLAND / SPEAKER NOTCH */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-full z-50 flex items-center justify-center border border-slate-800/40 shadow-inner">
            <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800/80 ml-auto mr-4 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-900"></div>
            </div>
          </div>

          {/* SYSTEM TOP STATUS BAR */}
          <div className="bg-amber-400 px-6 pt-3 pb-2 flex justify-between items-center text-slate-950 font-black text-[11px] z-40">
            <span>1:25 AM</span>
            <div className="flex items-center gap-1.5">
              <Signal size={12} strokeWidth={3} />
              <Wifi size={12} strokeWidth={3} />
              <div className="w-5 h-2.5 border-2 border-slate-950 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-4 bg-slate-950 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* APPLICATION MASTER APP CONTAINER */}
          <div className="flex-1 bg-slate-950 flex flex-col relative rounded-b-[42px] overflow-hidden">
            
            {/* BRAND APP BAR */}
            <div className="bg-amber-400 px-5 pb-5 pt-2 flex justify-between items-center shadow-lg rounded-b-[28px] z-30 border-b border-amber-500/20">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black italic tracking-tighter text-slate-950">Rapido</span>
                  <span className="bg-slate-950 text-amber-400 text-[9px] uppercase font-black px-1.5 py-0.5 rounded tracking-wider">Pilot Pro</span>
                </div>
                <p className="text-[10px] text-slate-900 font-bold mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
                  Auto-Match Active
                </p>
              </div>
              <div className="bg-slate-950 text-right px-3.5 py-1.5 rounded-xl border border-amber-300/10 shadow-xl">
                <span className="text-[9px] text-slate-400 block uppercase tracking-wider font-extrabold">Today's Pay</span>
                <span className="text-base font-black text-amber-400 tracking-tight">₹1,912.50</span>
              </div>
            </div>

            {/* MAIN DYNAMIC VIEWPORT SCENARIO INTERFACE */}
            <div className="flex-1 relative bg-slate-900 flex flex-col overflow-hidden">
              
              {/* ==================== STATE 1: INCOMING REQUEST VIEW ==================== */}
              {appState === "incoming" && (
                <div className="absolute inset-0 flex flex-col justify-between">
                  {/* High Fidelity Vector Grid Map Background */}
                  <div className="absolute inset-0 bg-slate-950 pointer-events-none opacity-40">
                    <div className="absolute top-1/3 left-0 w-full h-4 bg-slate-800 rotate-6"></div>
                    <div className="absolute top-2/3 left-0 w-full h-6 bg-slate-800 -rotate-12"></div>
                    <div className="absolute top-0 left-1/3 w-4 h-full bg-slate-800 rotate-45"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:12px_12px]"></div>
                    {/* Animated Pulsing Hotspot Zones */}
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-amber-500/20 rounded-full animate-ping [animation-duration:3s]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-emerald-500/10 rounded-full animate-ping [animation-duration:4s]"></div>
                  </div>

                  {/* Top Online Overlay Banner Toggle */}
                  <div className="z-10 p-4 w-full flex justify-center">
                    <button 
                      onClick={() => setIsOnline(!isOnline)}
                      className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full font-black text-xs tracking-wide shadow-xl transition-all duration-300 border uppercase ${
                        isOnline ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-rose-500 text-white border-rose-400'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full bg-white ${isOnline ? 'animate-ping' : ''}`}></span>
                      {isOnline ? "You are Online" : "You are Offline"}
                    </button>
                  </div>

                  {/* Offline Blocking Layer */}
                  {!isOnline && (
                    <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col justify-center items-center p-6 text-center z-40">
                      <AlertTriangle size={40} className="text-amber-400 mb-2 animate-bounce" />
                      <h3 className="text-base font-bold text-white">Go Online to Dispatch</h3>
                      <p className="text-xs text-slate-400 max-w-[220px] mt-1">High demand patterns detected across Madhapur hubs.</p>
                    </div>
                  )}

                  {/* BOTTOM HOVER MODAL DISPATCH CARD */}
                  <div className="bg-slate-900 border-t border-slate-800/80 p-4 rounded-t-[28px] shadow-[0_-12px_30px_rgba(0,0,0,0.6)] z-20 space-y-3.5">
                    <div className="flex justify-between items-center bg-slate-950 px-3 py-2 rounded-xl border border-amber-400/10">
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded animate-pulse">MATCH</span>
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Bike-Taxi Dispatch Request</span>
                      </div>
                      <div className="bg-rose-500/10 text-rose-400 px-2.5 py-1 rounded-full text-[10px] font-black border border-rose-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                        {timeLeft}s
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-gradient-to-r from-slate-950 to-slate-900 p-3.5 rounded-xl border border-slate-800/60">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold block uppercase">Distance</span>
                        <span className="text-xl font-black text-white">{currentTrip.distance}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-emerald-400 font-bold block uppercase">Est. Payout</span>
                        <span className="text-2xl font-black text-emerald-400">{currentTrip.fare}</span>
                      </div>
                    </div>

                    {/* Routing Visual Timeline */}
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/60 text-xs space-y-3">
                      <div className="flex gap-2.5">
                        <MapPin size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="truncate"><span className="text-[9px] text-slate-500 block uppercase font-bold">Pickup</span><p className="text-slate-200 font-semibold truncate">{currentTrip.pickup}</p></div>
                      </div>
                      <div className="flex gap-2.5">
                        <Navigation size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <div className="truncate"><span className="text-[9px] text-slate-500 block uppercase font-bold">Dropoff</span><p className="text-slate-400 font-medium truncate">{currentTrip.drop}</p></div>
                      </div>
                    </div>

                    {/* Action Triggers */}
                    <div className="grid grid-cols-5 gap-2.5 pt-1">
                      <button onClick={resetSimulation} className="col-span-2 bg-slate-950 border border-slate-800 text-slate-500 py-3 rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors uppercase">Skip</button>
                      <button onClick={handleAcceptRide} className="col-span-3 bg-amber-400 hover:bg-amber-300 text-slate-950 py-3 rounded-xl font-black text-xs transition-transform shadow-lg shadow-amber-400/10 flex items-center justify-center gap-1 uppercase tracking-wider">Accept & Navigate <ChevronRight size={14} strokeWidth={3} /></button>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== STATE 2: LIVE MAP GPS NAVIGATION VIEW ==================== */}
              {appState === "navigating" && (
                <div className="absolute inset-0 flex flex-col justify-between bg-slate-950">
                  
                  {/* LIVE ACTIVE HIGH FIDELITY MAP SIMULATOR GRAPHIC */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Rendered Road Vectors */}
                    <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                      {/* Grid background lines */}
                      <path d="M0 100 H400 M0 250 H400 M0 420 H400 M100 0 V600 M260 0 V600" stroke="#1e293b" strokeWidth="2" />
                      {/* Actual Active Navigation Route Path Highway */}
                      <path 
                        id="route-line"
                        d="M 100 420 L 100 250 L 260 250 L 260 100" 
                        fill="none" 
                        stroke="#334155" 
                        strokeWidth="8" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      {/* Active Progress Overlay Path Route */}
                      <path 
                        d="M 100 420 L 100 250 L 260 250 L 260 100" 
                        fill="none" 
                        stroke="#fbbf24" 
                        strokeWidth="8" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        strokeDasharray="600"
                        strokeDashoffset={600 - (600 * bikeProgress) / 100}
                        className="transition-all duration-100 ease-linear"
                      />
                    </svg>

                    {/* Pickup Marker Pin */}
                    <div className="absolute left-[86px] top-[404px] z-10 flex flex-col items-center">
                      <div className="bg-emerald-500 text-slate-950 font-black text-[9px] px-1 rounded shadow-lg">PICKUP</div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-md"></div>
                    </div>

                    {/* Dropoff Marker Pin */}
                    <div className="absolute left-[246px] top-[84px] z-10 flex flex-col items-center">
                      <div className="bg-amber-400 text-slate-950 font-black text-[9px] px-1 rounded shadow-lg">DROP</div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-slate-950 shadow-md"></div>
                    </div>

                    {/* LIVE MOVING BIKE TAXI SIMULATOR ICON AVATAR */}
                    <div 
                      className="absolute z-30 transition-all duration-100 ease-linear"
                      style={{
                        // Coordinates interpolated along the route paths mathematically based on progress bar percentage
                        left: bikeProgress < 40 
                          ? '84px' // Going up first stretch
                          : bikeProgress < 75 
                            ? `${84 + ((bikeProgress - 40) / 35) * 160}px` // Turning right horizontally
                            : '244px', // Going up final stretch
                        top: bikeProgress < 40 
                          ? `${404 - (bikeProgress / 40) * 170}px` 
                          : bikeProgress < 75 
                            ? '234px' 
                            : `${234 - ((bikeProgress - 75) / 25) * 150}px`,
                        transform: `translate(-25%, -25%) scale(1.1)`
                      }}
                    >
                      <div className="bg-amber-400 p-2 rounded-full text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.6)] border border-white/20 animate-bounce [animation-duration:1.5s]">
                        <Bike size={16} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Top HUD Directions Panel Banner */}
                  <div className="z-10 p-3 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 m-3 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="bg-amber-400 p-2.5 rounded-xl text-slate-950">
                      <Compass size={20} className="animate-spin [animation-duration:8s]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Navigation Route Active</span>
                      <p className="text-xs font-bold text-white truncate">Move straight 400m onto Hitech City main corridor</p>
                    </div>
                  </div>

                  {/* BOTTOM LIVE TRIP CONTROL METRICS CONTROLLER CARD */}
                  <div className="bg-slate-900 border-t border-slate-800 p-4 rounded-t-[24px] shadow-[0_-10px_30px_rgba(0,0,0,0.7)] z-20 space-y-3.5">
                    <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-bold text-xs shadow-inner">
                          <User size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-black text-white">{currentTrip.customer}</span>
                            <span className="text-[10px] text-amber-400 font-bold flex items-center gap-0.5"><Star size={10} fill="currentColor"/> {currentTrip.rating}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 block">Payment Mode: Digital Wallet</span>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        <button className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-xl border border-slate-800 transition-colors"><Phone size={14}/></button>
                        <button className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-xl border border-slate-800 transition-colors"><MessageSquare size={14}/></button>
                      </div>
                    </div>

                    {/* Progress tracking status indicator line bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>En-route to Destination</span>
                        <span className="text-amber-400 font-black">{Math.round(bikeProgress)}% Journey Map Completed</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800/40">
                        <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-100 ease-linear" style={{ width: `${bikeProgress}%` }}></div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setAppState("completed")}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3.5 rounded-xl font-black text-xs transition-colors shadow-lg shadow-emerald-500/10 uppercase tracking-wider"
                    >
                      Instant Complete Trip Simulation
                    </button>
                  </div>
                </div>
              )}

              {/* ==================== STATE 3: TRIP LIFECYCLE COMPLETED SUMMARY SCREEN ==================== */}
              {appState === "completed" && (
                <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center z-40 space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="bg-emerald-500/10 border-2 border-emerald-500 p-4 rounded-full text-emerald-400 relative">
                      <CheckCircle size={36} strokeWidth={2.5} className="animate-scale" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black text-white tracking-wide">Trip Successfully Completed!</h3>
                    <p className="text-xs text-slate-400 max-w-[220px] mx-auto">Fare balance processed and pushed directly into your pilot wallet storage registry.</p>
                  </div>

                  <div className="w-full bg-slate-900 p-4 rounded-2xl border border-slate-800/80 space-y-2.5">
                    <div className="flex justify-between text-xs font-bold border-b border-slate-800/60 pb-2">
                      <span className="text-slate-400">Base Fare Deposited</span>
                      <span className="text-white font-black">{currentTrip.fare}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold border-b border-slate-800/60 pb-2">
                      <span className="text-slate-400">Distance Travelled</span>
                      <span className="text-white font-black">{currentTrip.distance}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold pt-0.5">
                      <span className="text-emerald-400 font-extrabold">Net Earnings Gain</span>
                      <span className="text-emerald-400 font-black">{currentTrip.fare}</span>
                    </div>
                  </div>

                  <button 
                    onClick={resetSimulation}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 py-3.5 rounded-xl font-black text-xs transition-transform shadow-xl uppercase tracking-wider"
                  >
                    Return to Dispatch Stream
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}