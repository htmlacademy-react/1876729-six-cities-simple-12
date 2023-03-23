import React, {useState} from 'react';
import Comments from '../comments/comments';
import {CommentsType} from '../../types/comments.type';

type ReviewFormChangeEvent = React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>;
type ReviewFormBtnEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

type ReviewsOfferFormType = {
  CommentsPack: CommentsType;
}

function CommentAddForm({CommentsPack}: ReviewsOfferFormType) {
  const month = new Date().toLocaleString('default', { month: 'long' });
  const year = new Date().getFullYear();

  const [reviewObj, setFormData] = useState({
    name: 'People',
    review: '',
    date: `${month} ${year}`,
  });

  const fieldChangeHandle = (evt: ReviewFormChangeEvent) => {
    const {name, value} = evt.target;
    setFormData({...reviewObj, [name]: value});
    // eslint-disable-next-line no-console
    console.log(reviewObj);
  };

  const addComment = (evt: ReviewFormBtnEvent) => {
    evt.preventDefault();
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{CommentsPack.length}</span></h2>
      <ul className="reviews__list">
        {CommentsPack.map((item) => (<Comments key={item.id} date={item.date} name={item.name} text={item.text}/>))}
      </ul>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea onChange={fieldChangeHandle} value={reviewObj.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button onClick={addComment} className="reviews__submit form__submit button" type="submit" disabled={reviewObj.review.length < 49}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default CommentAddForm;
