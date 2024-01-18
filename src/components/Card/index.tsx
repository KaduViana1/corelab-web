import React, { ReactNode } from 'react';
import styles from './Card.module.scss';
import { FavoriteIcon } from '../Icons';
import Button from '../Button';

interface ICard {
  title?: string;
  children?: ReactNode;
  backgroundColor?: string;
  isFavorite?: boolean;
}

const Card = ({ children, title, backgroundColor, isFavorite }: ICard) => {
  return (
    /* 
    Recriar Cards com compopnentes diferentes para notas e para o'form'
    Aplicar box shadow apenas em notas favoritadas
    */

    <div
      style={{ backgroundColor: backgroundColor ? backgroundColor : 'white' }}
      className={styles.Card}
    >
      <div
        style={{
          borderBottom: backgroundColor
            ? '1px solid #FFFFFF'
            : '1px solid #D9D9D9',
        }}
        className={styles.heading}
      >
        {title ? (
          <h2>{title ?? 'Titulo'}</h2>
        ) : (
          <input className={styles.Title} placeholder="Titulo" />
        )}
        <Button onClick={(): void => {}}>
          <FavoriteIcon isFavoite={isFavorite} />
        </Button>
      </div>

      <div className={styles.content}>
        {children ?? <textarea defaultValue="Criar nota..."></textarea>}
      </div>
    </div>
  );
};

export default Card;
