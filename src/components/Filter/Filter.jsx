import { useSelector, useDispatch } from "react-redux";
import { findContact } from "store/contactSlice";
import s from './Filter.module.css'


const Filter = () => {
    const filter = useSelector(state=> state.contacts.filter)
    const dispatch = useDispatch();
    const onChangeFilter = (e) => dispatch(findContact(e.currentTarget.value));

    return (
        <div>
            <label>
            Find contacts by name
                <input
                    className={s.formInput}
                    type="text"
                    value={filter}
                    onChange={onChangeFilter}
                />
            </label>
        </div>
    );
}


export default Filter;
