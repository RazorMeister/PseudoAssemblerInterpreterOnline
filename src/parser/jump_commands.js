function Command_Jump(target)
{
	Command.call(this);
	this.target = target;
	this.execute = function(state)
	{
		state.source = state.line;
		state.tar = this.address;
		state.result = null;
		if(this.condition(state.sign_flag)) state.line = this.address - 1;
		return state;
	};
	this.translate_address = function(state)
	{
		if(state.lbls[this.target] !== undefined) this.address = state.lbls[this.target];
		else throw ["INVALID_LABEL"];
	};
}

function Command_Jump_Positive(target)
{
	Command_Jump.call(this, target);
	this.condition = function(sign)
	{
		return sign === 1;
	}
}


function Command_Jump_Negative(target)
{
	Command_Jump.call(this, target);
	this.condition = function(sign)
	{
		return sign === -1;
	}
}

function Command_Jump_Zero(target)
{
	Command_Jump.call(this, target);
	this.condition = function(sign)
	{
		return sign === 0;
	}
}

function Command_Jump_Always(target)
{
	Command_Jump.call(this, target);
	this.condition = function(sign)
	{
		return true;
	}
}