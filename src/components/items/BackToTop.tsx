import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    // handle scroll behavior
    const handleScroll = () => {
        // show the button when scroll past the hero section (100vh)
        if (window.scrollY > window.innerHeight) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    // handle click button
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // clean up when unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

  return (
    <>
    { isVisible &&
        <button 
        type="button"
        onClick={handleClick}
        className="fixed bottom-4 right-4 p-3 bg-primary text-forth rounded-full shadow-lg shadow-primary animate-bounce">
      <FaArrowUp className="w-4 h-4 sm:w-6 sm:h-6"/>
    </button>
    }
    </>
  )
}

export default BackToTop
