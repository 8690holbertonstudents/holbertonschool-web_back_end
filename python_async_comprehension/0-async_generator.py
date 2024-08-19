#!/usr/bin/env python3
"""
Module to use Python - Async
"""
import asyncio
import random


async def async_generator():
    """
    Function to use async generator
    Returns:
        float: random number between 0 and 10
    """
    num: float
    for num in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
