"use client" 
import { useState , useEffect } from "react"

export  function useMobile(breakpoint: number = 768) {
    const [isMobile, setIsMobile] = useState(false);
useEffect(()=>{
  function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
} ,[breakpoint])
return isMobile
}