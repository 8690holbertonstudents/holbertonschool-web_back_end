#!/usr/bin/env python3
"""
Module to use Python - Async
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """
    Function to measure runtime of async comprehension
    (that call async generator)
    """
    start_time = time.time()
    await asyncio.gather(*(async_comprehension() for num in range(4)))
    end_time = time.time()
    return end_time - start_time
