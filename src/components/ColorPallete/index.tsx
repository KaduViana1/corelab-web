import styles from './ColorPallete.module.scss';

const ColorPallete = () => {
  const colors = [
    '#BAE2FF',
    '#B9FFDD',
    '#FFE8AC',
    '#FFCAB9',
    '#F99494',
    '#9DD6FF',
    '#ECA1FF',
    '#DAFF8B',
    '#FFA285',
    '#CDCDCD',
    '#979797',
    '#A99A7C',
  ];
  return (
    <>
      <div className={styles.pallete}>
        {colors.map(color => (
          <button
            key={color}
            onClick={e => {
              e.stopPropagation();
              console.log(color);
            }}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </>
  );
};

export default ColorPallete;
