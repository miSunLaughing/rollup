import MagicString from 'magic-string';
import { StatementBase } from './shared/Statement';

export default class ExpressionStatement extends StatementBase {
	render (code: MagicString) {
		super.render(code);
		if (this.included) this.insertSemicolon(code);
	}
}
