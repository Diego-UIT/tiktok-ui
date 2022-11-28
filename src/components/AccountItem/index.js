import styles from './AcountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        alt="avatar"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2f5ea0aa35f6b3ca8155cdcc8a236124~c5_300x300.webp?x-expires=1669773600&x-signature=ezOCRNoJ8EOld%2B7AvN9S%2FW%2B0bQE%3D"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van C</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>ngvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
