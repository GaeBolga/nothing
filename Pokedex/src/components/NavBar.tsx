

interface NavBarProps {
  count: number; 
  setCount: (index: number) => void; 
  totalCount: number; 
}

function NavBar({ count, setCount, totalCount }: NavBarProps) {
  const handleClickPos = () => {
    if (count < totalCount - 1) {
      setCount(count + 1);
    }
  };

  const handleClickNeg = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {count > 0 ? (
        <button type="button" onClick={handleClickNeg}>
          Précédent
        </button>
      ) : (
        <span>ENOUGH</span>
      )}
      {count < totalCount - 1 ? (
        <button type="button" onClick={handleClickPos}>
          Suivant
        </button>
      ) : (
        <span>STOP</span>
      )}
    </>
  );
}

export default NavBar;