#!/usr/bin/env python3
"""
Module to use typed variables
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Function to return a tuple with a string and a float
    Args:
        k (str): the string
        v (Union[int, float]): Float or int number
    Returns:
        A tuple with the string k and the square of v
    """
    return (k, v**2)
