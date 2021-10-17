import { connect } from "react-redux";
import CountUI from "./CountUI";

/**
 * 1. mapStateToProps函数返回一个对象，
 * 2. 返回的对象中key就作为传递给UI组件props的key，value就是value
 * 3. mapStateToProps用于传递状态
 */
function mapStateToProps(state) {
    return { count: state };
}

/**
 *
 */
function mapDispatchToProps(dispatch) {
  return { jia: (num) => dispatch({type: 'increment', data: num}) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
