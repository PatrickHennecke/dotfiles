#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

if [ ! -f ~/.first_terminal_session ]; then
    touch ~/.first_terminal_session
    echo -e "\n\n"
    fastfetch
fi

