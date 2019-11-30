function Command_Jump(target)
{
	Commad.call(this);
	this.target = target;
	this.execute = function(state)
	{
		if(this.condition(state.sign)) state.line = this.address;
		return state;
	};
	this.translate_address = function(state)
	{
		if(state.lbls[this.target] !== undefined) this.address = state.lbls[this.target];
		else throw "WrongLablelException";
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