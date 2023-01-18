import masker from '../../assets/masker/masker';
import tokens from '../../assets/masker/tokens';
import './input.scss';

function Input(props: any) {
  let {
    id,
    name,
    value,
    mask = 'P'.repeat(240),
    token = tokens,
    className = '',
    icon,
    type = 'text',
    placeholder = 'Placeholder',
    label = "input",
  } = props;
  const getIconsSrc = (iconName: string): string =>  require(`../../assets/icons/${iconName}.svg`)
  const refresh = (st: string | any):string | void =>  masker(st, mask, false, token)
  const changes = (e: Event | any) => {
    const value = e.target.value || ''
    const el: Element | any = document.getElementById(id)

    el.value = refresh(value)
  }
  const inputOrTextarea = type === 'textarea' 
    ? <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changes}
      /> 
    : <input
        type={type} 
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changes}
      />
  return (
    <div className={`input ${className}`}>
      <label htmlFor={id}>{label}</label>
      {inputOrTextarea}
      {icon && ( <img onClick={props.onChildChanged} src={getIconsSrc(icon)} alt="icon" />)}
    </div>
  )
}

export default Input