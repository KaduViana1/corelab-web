import { useTodoStore } from '../../store';
import styles from './ColorPallete.module.scss';

interface iCollorPallete {
  id: number;
}

const COLLORS = [
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

const ColorPallete = ({ id }: iCollorPallete) => {
  const changeColor = useTodoStore(state => state.changeColor);

  const selectColor = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    color: string
  ) => {
    e.stopPropagation();
    changeColor(id, color);
  };

  return (
    <>
      <div className={styles.pallete}>
        {COLLORS.map(color => (
          <button
            key={color}
            onClick={e => selectColor(e, color)}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </>
  );
};

export default ColorPallete;
